// Khmer digit map
const khmerDigits = ["សូន្យ", "មួយ", "ពីរ", "បី", "បួន", "ប្រាំ", "ប្រាំមួយ", "ប្រាំពីរ", "ប្រាំបី", "ប្រាំបួន"];
const khmerTens = ["", "ដប់", "ម្ភៃ", "សាមសិប", "សែសិប", "ហាសិប", "ហុកសិប", "ចិតសិប", "ប៉ែតសិប", "កៅសិប"];
const khmerUnits = [
  "", "ពាន់", "លាន", "ប៊ីលាន", "ទ្រីលាន", 
  "ក្វាទ្រីលាន", "គ្វីនទ្រីលាន", "សិចទ្រីលាន",
  "សិបទីលាន", "អុកទីលាន", "ណូនីលាន", "ដេសុីលាន", "អាន់ដេស៊ីល្យូន"
];

function numberToKhmerWords(numStr) {
  if (numStr === "0") return khmerDigits[0];
  if (!/^\d+$/.test(numStr)) return "មិនមែនលេខត្រឹមត្រូវ";

  const groups = [];
  numStr = numStr.padStart(Math.ceil(numStr.length / 3) * 3, "0");
  for (let i = 0; i < numStr.length; i += 3) {
    groups.push(numStr.substr(i, 3));
  }

  let result = "";
  groups.forEach((group, i) => {
    const [h, t, u] = group.split('').map(Number);
    let groupText = "";

    if (h) groupText += khmerDigits[h] + "រយ";
    if (t === 1) {
  groupText += "ដប់";
  if (u) groupText += khmerDigits[u];
} else {
  if (t) groupText += khmerTens[t];
  if (u) groupText += khmerDigits[u];
}

    const unitIndex = groups.length - i - 1;
    if (groupText !== "") groupText += khmerUnits[unitIndex];
    result += groupText;
  });

  return result;
}

// English digit map
const englishDigits = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
const englishTens = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Fixty", "Seventy", "Eighty", "Ninety"];
const englishTeens = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", 
                      "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
const englishUnits = [
 "", "Thousand", "Million", "Billion", "Trillion", 
 "Quadrillion", "Quintillion", "Sextillion",
 "Septillion", "Octillion", "Nonillion", "Decillion", "Undecillion"];                      

function numberToEnglishWords(numStr) {
  if (numStr === "0") return englishDigits[0];
  if (!/^\d+$/.test(numStr)) return "Invalid number";

  // Pad to groups of 3 digits
  const groups = [];
  numStr = numStr.padStart(Math.ceil(numStr.length / 3) * 3, "0");
  for (let i = 0; i < numStr.length; i += 3) {
    groups.push(numStr.substr(i, 3));
  }

  let result = "";
  groups.forEach((group, i) => {
    const [h, t, u] = group.split('').map(Number);
    let groupText = "";

    if (h) groupText += englishDigits[h] + " hundred";

    if (t === 1) {
      const teenWord = englishTeens[u];
      groupText += (h ? " and " : "") + teenWord;
    } else {
      if (t) groupText += (h ? " and " : "") + englishTens[t];
      if (u) groupText += (t ? "-" : (h ? " and " : "")) + englishDigits[u];
    }

    const unitIndex = groups.length - i - 1;
    if (groupText !== "") groupText += " " + englishUnits[unitIndex];
    if (groupText) result += groupText + " ";
  });

  return result.trim();
}

window.numberToKhmerWords = numberToKhmerWords;
window.numberToEnglishWords = numberToEnglishWords;
