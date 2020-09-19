students = ["Jim", "John", "Jack", "Jacob", "Joseph"]
grades = []
for student in students:
    passed = False
    while not passed:
        try:
            grade = float(input(f"Input a quiz grade for {student} (0-100): "))
            if not 0 <= grade <= 100: raise ValueError()
            grades.append(grade)
            passed = True
        except ValueError:
            print("Grade must be a number between 0-100")

print(f"Max: {max(grades)} - Min: {min(grades)} - Avg: {sum(grades) / len(grades)}")

