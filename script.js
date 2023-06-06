// Get form element and result element
const gpaForm = document.getElementById('gpaForm');
const resultDiv = document.getElementById('result');
const gpaResult = document.getElementById('gpa');

// Add submit event listener to the form
gpaForm.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const course_01 = parseFloat(document.getElementById('course01').value);
  const course_02 = parseFloat(document.getElementById('course02').value);
  const course_03 = parseFloat(document.getElementById('course03').value);
  const course_04 = parseFloat(document.getElementById('course04').value);
  const course_05 = parseFloat(document.getElementById('course05').value);
  const course_06 = parseFloat(document.getElementById('course06').value);
  const course_07 = parseFloat(document.getElementById('course07').value);
  const course_08 = parseFloat(document.getElementById('course08').value);
  // Get the rest of the course values

  // Calculate total point and GPA
  const totalPoint = (4 * course_01) + (2 * course_02) + (4 * course_03) + (2 * course_04) + (4 * course_05) + (4 * course_06) + (4 * course_07) + (4 * course_08) // Calculate the total point based on the formula
  const totalCredit = 28;
  const gpa = (totalPoint / totalCredit).toFixed(2);

  // Update the result
  gpaResult.textContent = gpa;
  resultDiv.classList.remove('hidden');
});
