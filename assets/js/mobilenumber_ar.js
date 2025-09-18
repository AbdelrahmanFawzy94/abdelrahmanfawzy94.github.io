const itiInput = document.querySelector("#mobile");
let dialKey = "1";
let phoneNumber = null;

const iti = window.intlTelInput(itiInput, {
  separateDialCode: false, // show country and dial code inside the input
  nationalMode: false, // enforce international format
  placeholderNumberType: "MOBILE",
  utilsScript: "assets/js/utils-17-0-3.js", // Required for validation
});

const allCountries = window.intlTelInputGlobals.getCountryData();

// Validate number and show message
function validatePhoneNumber() {
  const errorMap = {
    //  0: "✅ Valid number.",
    1: "❌ رقم كود غير صحيح.",
    2: "❌ رقم جوال قصير غير صحيح.",
    3: "❌ رقم جوال طويل غير صحيح.",
    4: "❌ رقم جوال غير صحيح.",
  };

  const isValid = iti.isValidNumber();
  const errorCode = iti.getValidationError();

  const message = isValid
    ? errorMap[0]
    : errorMap[errorCode] || "❌ رقم جوال غير صحيح.";
  showValidationMessage(message, isValid);
}

// Show feedback message
function showValidationMessage(msg, isValid) {
  let msgBox = document.querySelector("#phone-msg");

  if (!msgBox) {
    msgBox = document.createElement("div");
    msgBox.id = "phone-msg";
    msgBox.style.marginTop = "5px";
    msgBox.style.fontSize = "14px";
    itiInput.parentNode.insertBefore(msgBox, itiInput.nextSibling);
  }

  msgBox.textContent = msg;
  msgBox.style.color = isValid ? "green" : "red";

  isValid
    ? (phoneNumber = itiInput.value.slice(dialKey.length + 1))
    : (phoneNumber = null);
}

// Try to detect country only if typing name/code (not digits only)
function trySetCountryFromInput(value) {
  const trimmedInput = value.toLowerCase().trim();

  // Avoid changing if it's just a phone number
  if (/^\d+$/.test(trimmedInput)) return;

  let country = null;

  country = allCountries.find((c) => c.iso2 === trimmedInput);

  if (!country && trimmedInput.startsWith("+")) {
    const dial = trimmedInput.replace(/\D/g, "");
    country = allCountries.find((c) => c.dialCode === dial);
  }

  if (!country) {
    country = allCountries.find((c) =>
      c.name.toLowerCase().includes(trimmedInput)
    );
  }

  if (country) {
    dialKey = country.dialCode;
    iti.setCountry(country.iso2);
  }
}

// Event: Live input
let lastValidValue = "";
const validPattern = /^[0-9+]*$/;

itiInput.addEventListener("input", (event) => {
  if (!itiInput.value.startsWith("+")) {
    itiInput.value = "+" + dialKey + itiInput.value;
  }
  const value = itiInput.value;

  if (validPattern.test(itiInput.value)) {
    lastValidValue = itiInput.value;
  } else {
    itiInput.value = lastValidValue; // undo invalid input
  }

  if (value.length >= 2) {
    trySetCountryFromInput(value);
  }

  validatePhoneNumber();
});

itiInput.addEventListener("countrychange", () => {
  const countryData = iti.getSelectedCountryData();
  dialKey = countryData.dialCode;
});
