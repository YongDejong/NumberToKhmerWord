<!DOCTYPE html>
<html lang="km">
<head>
  <meta charset="UTF-8">
  <title>Number to Khmer Words</title>
  <style>
    body {
      font-family: 'Khmer OS', Arial, sans-serif;
      background-color: #f2f2f2;
      text-align: center;
      padding: 40px;
    }
    form {
      background: white;
      padding: 20px;
      margin: auto;
      width: 60%;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
    }
    input[type="number"] {
      padding: 10px;
      width: 80%;
      font-size: 18px;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      margin-top: 10px;
    }
    .result {
      margin-top: 20px;
      font-size: 24px;
      color: #333;
    }
  </style>
</head>
<script src="convert.js"></script>
<script>
function convertNumber(e) {
  e.preventDefault();
  const number = document.getElementById("numberInput").value.trim();

  const khmerResult = numberToKhmerWords(number);
  const englishDivided = (Number(number) / 4000).toFixed(2); // Convert to dollars
  const englishResult = numberToEnglishWords(number); // You already have this in convert.js

  document.getElementById("khmerResult").innerText = `អក្សរខ្មែរ: ${khmerResult}​រៀល`;
  document.getElementById("englishResult").innerText = `In English: ${englishResult} Riel`;
  document.getElementById("DollarResult").innerText = `Dollar: ${englishDivided}$`;
  document.getElementById("resultBox").style.display = 'block';

  const blob = new Blob([
    `លេខ: ${number}\n`,
    `អក្សរខ្មែរ: ${khmerResult}រៀល\n`,
    `In English: ${englishResult} Riel`,
    `Dollar: ${englishDivided} $`
  ], { type: 'text/plain;charset=utf-8' });

  const filename = `number_${number}.txt`;
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>


<body>
  <h1>បំលែងលេខទៅជាអក្សរខ្មែរ</h1>
  <form onsubmit="convertNumber(event)">
  <input type="number" id="numberInput" placeholder="បញ្ចូលលេខ..." required />
  <br>
  <button type="submit">បំលែង</button>
</form>
<div class="result" id="resultBox" style="display:none;">
  <strong>លទ្ធផល៖</strong><br>
  <span id="khmerResult"></span><br>
  <span id="englishResult"></span><br>
  <span id="DollarResult"></span>
</div>
</body>
</html>
