import React from "react";

function Faq() {
  const faqs = [
    {
      question: "What is a Stoxify Account?",
      answer:
        "A Stoxify account is a unified demat and trading account that enables you to buy, sell, and hold securities digitally — all in one place.",
    },
    {
      question: "Documents Required to Open a Stoxify Demat Account",
      answer:
        "To open your account online with Stoxify, you’ll need: PAN Card, Aadhaar (linked to mobile), Cancelled cheque or bank statement, Income proof (for F&O).",
    },
    {
      question: "Is Account Opening Free with Stoxify?",
      answer:
        "Yes, opening a Stoxify account is absolutely free of charge.",
    },
    {
      question: "Are There Any Demat Account Maintenance Charges?",
      answer:
        "Basic Services Demat Account (BSDA): No charges under ₹4L. Standard Account: ₹300 annually + GST.",
    },
    {
      question: "Can I Open a Demat Account Without a Bank Account?",
      answer:
        "A bank account is mandatory. If UPI verification fails, upload a cancelled cheque or statement.",
    },
  ];

  return (
    <div className="container py-5 my-5">
      <h2 className="text-center fw-semibold mb-4">Frequently Asked Questions</h2>

      <div className="accordion accordion-flush" id="faqAccordion">
        {faqs.map((faq, index) => (
          <div className="accordion-item" key={index}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="false"
                aria-controls={`collapse${index}`}
              >
                <h6 className="mb-0 text-muted">{faq.question}</h6>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
