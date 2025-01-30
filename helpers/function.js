
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