"use strict";
// The owner-supplied checkout is independent of the remaining content review.
let checkoutDestination = null;
try {
  if (CHECKOUT_URL) {
    const destination = new URL(CHECKOUT_URL);
    if (destination.protocol !== "https:") throw new Error("Checkout must use HTTPS.");
    const incoming = new URLSearchParams(window.location.search);
    for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "utm_id"]) {
      const value = incoming.get(key);
      if (value) destination.searchParams.set(key, value);
    }
    checkoutDestination = destination.href;
  }
} catch { /* A missing or invalid checkout remains unavailable. */ }

document.querySelectorAll("[data-checkout]").forEach((link) => {
  if (checkoutDestination) {
    link.href = checkoutDestination;
    link.removeAttribute("aria-disabled");
    link.removeAttribute("tabindex");
  } else {
    link.setAttribute("role", "link");
    link.setAttribute("aria-label", "Get the Kit — $29. Unavailable in this working preview.");
    const explain = (event) => {
      event.preventDefault();
      let status = link.parentElement.querySelector(".checkout-status");
      if (!status) {
        status = document.createElement("p");
        status.className = "checkout-status";
        status.setAttribute("role", "status");
        link.insertAdjacentElement("afterend", status);
      }
      status.textContent = "Checkout is not configured. This is a working preview.";
    };
    link.addEventListener("click", explain);
    link.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") explain(event);
    });
  }
});
