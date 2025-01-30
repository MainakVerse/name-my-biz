<div align="center">
 
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Shadcn UI](https://img.shields.io/badge/Shadcn_UI-2B6CB0?style=for-the-badge&logo=shadcnui&logoColor=white)
![Gemini](https://img.shields.io/badge/Gemini-1F2D3D?style=for-the-badge&logo=app-store&logoColor=white)

  <h3 align="center">🤖 AI-Powered Business Name Generator</h3>

   <div align="center">
    Build AI-powered business name generator using   <b>Next.js, Shadcn UI, TailwindCSS, Gemini.</b> Watch step-by-step video tutorial on <a href="https://www.youtube.com/@developergoswami/videos" target="_blank"><b>Developer Goswami</b></a> YouTube channel.  Make sure to subscribe my YouTube channel for such great content!
    </div>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🙋 [About the Creator](#about-the-creator)
2. 🤖 [Introduction](#introduction)
3. ⚙️ [Tech Stack](#tech-stack)
4. 📃 [Features](#features)
5. 🤸 [Quick Start](#quick-start)
6. 🕸️ [Snippets](#snippets)
7. 🔗 [Resources](#resources)

## <a name="about-the-creator">🙋 About The Creator</a>

Hi there! 👋 I'm Developer Goswami, a passionate software developer and tech enthusiast dedicated to helping others learn and grow in the field of web development.

I create beginner-friendly tutorials and in-depth coding videos on my [YouTube channel](https://www.youtube.com/@developergoswami) , covering a wide range of technologies like Next.js, React, TailwindCSS, PHP, Laravel, and more. My mission is to simplify complex topics and empower developers to build amazing projects with confidence.

🌟 Why Follow Me?

- 💻 Practical Tutorials: Learn by building real-world projects.
- 🧑‍🏫 Beginner-Friendly Approach: Step-by-step guidance for all skill levels.
- 📚 Free Resources: Open-source code and detailed explanations.
- 🚀 Focus on Growth: Tips, tricks, and best practices for modern development.

If you're looking to enhance your coding skills or explore exciting projects, you're in the right place!

Don’t forget to subscribe to my YouTube channel and star this repository for more awesome content.

### 🤝 Connect with Me:

### Connect with Me

Feel free to connect with me on below social plateform:

[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@developergoswami)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/developer-goswami/)
[![Instagram](https://img.shields.io/badge/Instagram-E1306C?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/developer_goswami/)
[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Goswami2021Vaibhav)

## <a name="introduction">🤖 Introduction</a>

Build a full stack ai-powered business name generator tool using NextJs, JavaScript, TailwindCSS, ShadcnUI and Gemini. Follow step-by-step video tutorial to build this project.

## <a name="tech-stack">⚙️ Tech Stack</a>

- **Next.js**: For building a fast and scalable web application.
- **TailwindCSS**: To design a responsive and visually stunning user interface.
- **Shadcn UI**: To streamline the development of modern, accessible components.
- **Gemini**: To integrate powerful AI capabilities seamlessly.
- **JavaScript**: The core programming language powering the application.

## <a name="features">📃 Features</a>

- **AI-Powered Name Generation**: Generate unique and creative business names tailored to your needs.
- **Domain Name Availability**: Instantly check domain availability for your chosen business name.
- **Clean & Responsive UI**: Enjoy a visually appealing and seamless user experience across all devices.
- **Beginner-Friendly Code**: Simple and well-structured codebase, ideal for learning and customization.

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/Goswami2021Vaibhav/AI-Powered-Business-Name-Generator-Using-NextJs.git
cd AI-Powered-Business-Name-Generator-Using-NextJs
```

**Installation**

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env/.env.local` in the root of your project and add the following content:

```env
NEXT_PUBLIC_GEMINI_API=
NEXT_PUBLIC_DOMAIN_STATUS_API=
```

add your own api keys.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>helpers/constant.js</code></summary>

```js
export const nameStyle = [
  {
    id: 1,
    name: "Auto",
    description: "All Styles",
  },
  {
    id: 2,
    name: "Brandable",
    description: "like Google and Rolex",
  },
  {
    id: 3,
    name: "Evocative",
    description: "like RedBull and Forever21",
  },
  {
    id: 4,
    name: "Short Phrase",
    description: "like Dollar shave club",
  },
  {
    id: 5,
    name: "Compound Words",
    description: "like FedEx and Microsoft",
  },
  {
    id: 6,
    name: "Alternate Spelling",
    description: "like Lyft and Fiverr",
  },
  {
    id: 7,
    name: "Non-English Words",
    description: "like  Toyota and Audi",
  },
  {
    id: 8,
    name: "Real Words",
    description: "like Apple and Amazon",
  },
];
export const Randomness = [
  {
    id: 1,
    name: "Low",
    description: "Less random. The most direct name ideas",
  },
  {
    id: 2,
    name: "Medium",
    description: "Balanced. More creative results",
  },
  {
    id: 3,
    name: "High",
    description: "Random ideas. More varied results",
  },
];
```

 </details>
<details>
<summary><code>helpers/function.js</code></summary>

```js

export const generatePrompt = (inputs) => {
    const prompt = `Hey gemini! i need your help in generating business name. i have name style, randomness and brand info so use these information to generate business name.
  
  here are inputs: 
  
  -Name Style: ${inputs?.nameStyle || "Auto"}
  -Randomness: ${inputs?.randomness || "Low"}
  -Brand Info: keyword: ${inputs?.keyword || "Coding"} & description:  ${inputs?.description || "A Coding YouTube Channel"
        }
  
  ### Requirements:
  - Provide 20 unique business names based on the inputs.
  - Format the response in JSON, including:
   - 'nameStyle': The style of the generated name.
   - 'randomness': The level of randomness used.
   - 'keyword': The provided keyword.
   - 'description': The provided brand description.
   - 'names': An array of suggested business names.
  
  
  ### Here is ths meaning of all name styles and randomness 
  
  Name styles :
  
  -Auto: All Styles
  -Brandable: like Google and Rolex
  -Evocative: like RedBull and Forever21
  -Short Phrase: like Dollar shave club
  -Compound Words: like FedEx and Microsoft
  -Alternate Spelling: like Lyft and Fiverr
  -Non-English Words: like Toyota and Audi
  -Real Words: like Apple and Amazon
  
  Randomness: 
  
  -Low: Less random. The most direct name ideas
  -Medium: Balanced. More creative results
  -High: Random ideas. More varied results
  
  ### Example JSON Response:
  {
   "nameStyle": "Real World",
   "randomness": "Medium",
   "keyword": "tech",
   "brand_description": "A cutting-edge technology company creating AI-powered solutions for businesses.",
   "names": [
     "Innovexa",
     "Nextify",
     "Cognitech",
     "BrightLab",
     "TechTide"
   ]
  }
  
  Note: make sure names array should not contain any duplicate value and if name style is Auto then generate names of all other styles.
  
  and i'm adding an array of names that already i have so don't repeat same names into response 
  
  Names i have: ${inputs.names || []}
  
  `;

    return prompt;
};
```

 </details>
 
## <a name="resources">🔗 Resources</a>

- **Google AI Studio**: [Google AI Studio](https://aistudio.google.com/prompts/new_chat)
- **Domain Availability API**: [Domain Availability API](https://domain-availability.whoisxmlapi.com/api)
