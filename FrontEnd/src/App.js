import React from "react";
import Input from "./components/common/Input"; // Adjust path as needed
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="mb-4">Input Components</h2>

              <div className="border-start border-end px-4 py-3" style={{ borderStyle: "dashed" }}>
                {/* Basic Input */}
                <Input text="Label" />
                <Input text="Label" variant="label" />

                {/* Input with counter */}
                <Input text="Label" variant="counter" counter="0" maxCount="80" />

                <Input
                  variant="iconDivider"
                  icon="fas fa-slack-hash"
                  text="Label"
                  placeholder="Label"
                />

                <Input
                  variant="priceInput"
                  icon="fas fa-dollar-sign"
                  text="Prices"
                  currency="USD"
                  placeholder="Course price..."
                />

                {/* Input Input */}
                <Input
                  variant="iconInside"
                  text="Label"
                  icon="" // không cần icon bên trái
                  rightIcon="fas fa-eye"
                />

                <Input
                  variant="iconInside"
                  placeholder="Write your reply"
                  icon="fas fa-comment-dots"
                />

                {/* Success and error Input */}
                <Input variant="success" text="Label" />
                <Input variant="error" text="Label" />
              </div>

              <h2 className="mt-5 mb-4">Dropdown Components</h2>

              <div className="border border-4 border-warning p-4 position-relative" style={{ borderColor: "purple" }}>

                {/* Default dropdown */}
                <Input text="Select..." variant="dropdown" options={["Label 01", "Label 02", "Label 03", "Label 04"]} />

                {/* Selected dropdown */}
                <Input
                  text="Label"
                  variant="dropdown"
                  options={["Label 01", "Label 02", "Label 03", "Label 04"]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;