CREATE OR REPLACE FUNCTION update_overdue_months() 
RETURNS void LANGUAGE plpgsql AS $$
DECLARE
    student RECORD;
    book RECORD;
    overdue_counts INTEGER[12];
    late integer;
BEGIN

    UPDATE "Books"
    SET is_overdue = (return_date < CURRENT_DATE);
    FOR student IN SELECT * FROM "Student" LOOP
        overdue_counts :=student.overdue_month;
        late = student.late_fine;
        FOR book IN 
            SELECT * 
            FROM "Books" 
            WHERE owener_id = student.id 
              AND return_date < CURRENT_DATE 
              AND is_overdue = TRUE 
        LOOP
            overdue_counts[EXTRACT(MONTH FROM book.return_date)::INTEGER] := 
                overdue_counts[EXTRACT(MONTH FROM book.return_date)::INTEGER] + 1;
            late := late + 10;
        END LOOP;

        UPDATE "Student" 
        SET overdue_month = overdue_counts , late_fine = late
        WHERE id = student.id;
    END LOOP;
END;
$$;

SELECT cron.schedule('check_overdue_books','30 18 * * *', 
$$ select update_overdue_months(); $$);
