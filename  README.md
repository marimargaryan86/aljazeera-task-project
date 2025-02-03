# 🚀 Al Jazeera Task Project - CodeceptJS Test Automation Framework

## 📖 Overview
This project uses **CodeceptJS** with **WebDriver**, **BDD (Gherkin)**, **Page Object Model (POM)**, and **Allure Reporting** for automated testing of the Al Jazeera website.

It supports:
- **WebDriver (Safari)**
- **Allure Reporting for test results**
- **Retry & Smart Wait mechanisms**
- **CodeceptJS UI for test debugging**

---

## 🛠️ Installation & Running Tests

### **1️⃣ Prerequisites**
Ensure you have the following installed:
- **Node.js** (>= 14) → [Download Here](https://nodejs.org/)
- **npm** (Comes with Node.js) or **yarn**
- **Safari WebDriver** (for macOS users)
  ```bash
  sudo safaridriver --enable
  ```
- **Java (JRE 8+ required for Allure Reporting)** → [Download Here](https://www.oracle.com/java/technologies/javase-jre8-downloads.html)

### **2️⃣ Clone the Repository**
```bash
git clone https://github.com/marimargaryan86/aljazeera-task-project.git
cd aljazeera-task-project
```

### **3️⃣ Install Dependencies**
```bash
npm install
```

### **4️⃣ Run Tests**

#### **📌 Run All Tests with Steps Logging**
```bash
npm run codeceptjs
```

#### **📌 Run Tests in Headless Mode**
```bash
npm run codeceptjs:headless
```

#### **📌 Run a Specific Feature File**
```bash
npx codeceptjs run --features features/most-popular.feature --steps
```

#### **📌 Run a Specific Scenario**
```bash
npx codeceptjs run --grep "Verify Most popular section is visible"
```

#### **📌 Run CodeceptJS in UI Mode**
```bash
npm run codeceptjs:ui
```

#### **📌 Run WebDriverIO Tests**
```bash
npm run wdio
```

---

## 📊 Generating & Viewing Allure Reports

### **1️⃣ Enable Allure Reporting**
Test results are automatically stored in `/allure-results` after each test execution.

### **2️⃣ Open the Allure Report**
```bash
allure serve allure-results
```

---

## 📂 Project Structure

```
📂 aljazeera-task-project/
│── 📂 step_definitions/       # Step Definitions (BDD Gherkin Steps)
│   ├── most-popular.ts        # Steps for Most Popular section
│   ├── live-stream.ts         # Steps for Livestream section
│
│── 📂 pageobjects/            # Page Object Model (POM) classes
│   ├── base.ts                # Base Page with common methods
│   ├── home.ts                # Home Page Object
│   ├── live.ts                # Live Page Object
│
│── 📂 features/               # Feature files (BDD)
│   ├── most-popular.feature
│   ├── live-stream.feature
│
│── 📂 output/                 # Screanshots on failure
│
│── 📂 allure-results/         # Allure test results
│── 📜 codecept.conf.ts        # CodeceptJS Configuration
│── 📜 tsconfig.json           # TypeScript Config
│── 📜 package.json            # Dependencies & Scripts
│── 📜 README.md               # Documentation
```

---

## 🔧 Troubleshooting

### **❌ Tests Fail Due to Element Not Found**
- Ensure the element **exists** and is **visible** on the page.
- Add **wait times** before interacting:
  ```typescript
  this.I.waitForVisible(selector, 10);
  ```
- Use **retry mechanisms** with:
  ```typescript
  tryTo(() => this.I.click(selector));
  ```

### **❌ Allure Report Not Opening**
- Ensure **Java JDK 8+** is installed.
- Run:
  ```bash
  npx allure generate ./allure-results --clean && npx allure open
  ```

### **❌ WebDriver Issues**
- Ensure your **Safari WebDriver** is enabled:
  ```bash
  sudo safaridriver --enable
  ```
- Restart WebDriver:
  ```bash
  npx codeceptjs run --restart
  ```

---

## 🤝 Contributing
Feel free to create a Pull Request if you’d like to add new features or improve tests.

---

🚀 **Happy Testing!**
