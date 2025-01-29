// Function to calculate SGPA and percentage
function calculateSGPA() {
    // Get SGPA values from inputs
    let sem1 = parseFloat(document.getElementById("sem1").value);
    let sem2 = parseFloat(document.getElementById("sem2").value);
    let totalCredits = 20 + 20;  // Example credits per semester, adjust as per your requirements
    let weightedSum = 0;  
    if (!isNaN(sem1)) weightedSum += sem1 * 20;
    if (!isNaN(sem2)) weightedSum += sem2 * 20;
    let sgpa = (weightedSum / totalCredits).toFixed(2);
    document.getElementById("final-cgpa").value = sgpa;
    document.getElementById("final-percentage").value = ((sgpa - 0.75) * 10).toFixed(2) + "%";
}
