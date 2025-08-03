"use client"; // Add this directive to indicate client-side rendering

import React, { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const CLIPortfolio = () => {
  const [currentDirectory, setCurrentDirectory] = useState('~');
  const [commandHistory, setCommandHistory] = useState([
    'Welcome to Khushi Sinha\'s Portfolio! Type "help" for available commands.',
  ]);
  const [inputValue, setInputValue] = useState('');
  const [cursorVisible, setCursorVisible] = useState(true);

  const sections: Record<string, string> = {
    about: `
About Me:
---------
• Software Developer with a passion for crafting elegant solutions
• Currently pursuing B.E. in CSE at Chandigarh University (CGPA: 7.37)
• Focus on creating innovative solutions and enhancing user experiences
`,
    projects: `
Projects:
---------
1. CU-GRADS (March 2024)
   • Interactive information app for student networking
   • Tech: Flutter, Dart, Firebase

2. Real Time Chat Web Application (Jan 2024)
   • Dynamic communication platform
   • Tech: Tailwind CSS, JavaScript, React.js, Node.js, Express.js, Socket.io

3. Rentopia - A Rented Hub (Nov 2023)
   • Rental platform connecting renters and landlords
   • Tech: NextJS, Tailwind CSS
`,
    skills: `
Technical Skills:
---------------
• Languages: C++, Java, Python, JavaScript, Dart, Tailwind CSS, SQL
• Frameworks: NodeJs, ReactJs
• Tools: Git, Github, Linux, Windows, MS Office Suite
• Core: DBMS, Computer Networks, Computer Architecture, OOPs, TCP/IP

Soft Skills:
-----------
• Problem Solving
• Communication
• Collaboration
• Attention to Detail
`,
    contact: `
Contact Information:
------------------
• Email: sinhakhushi0803@gmail.com
• Phone: +91 6200578212
• GitHub: Khushi-83
• LinkedIn: khushisinha83
`,
    certifications: `
Certifications:
-------------
• IBM Full Stack Software Developer - Coursera
• Networking Essentials - Cisco
• Google IT Support - Coursera
• Cloud Support Associate - Coursera
• Elite Certificate in "Internet Of Things" - SWAYAM NPTEL (IIT Madras)
`,
    achievements: `
Achievements & Activities:
-----------------------
• Best Geek of the Section Award - CSE Department, 2nd year
• Graphics Coordinator at IEEE Computational Intelligence Society
• Published review paper on AI Ethics and Fairness (March 2023)
`,
  };

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const commandResponses: Record<string, string> = {
    help: `
Available commands:
------------------
help            Show this help message
ls              List available sections
cd <section>    View a specific section (e.g., cd projects)
pwd             Show current directory
clear           Clear the terminal
contact         Show contact information

Available sections:
-----------------
${Object.keys(sections).join('\n')}
`,
    ls: Object.keys(sections).join('  '),
    pwd: currentDirectory,
    contact: sections.contact,
  };

  const executeCommand = (input: string): string => {
    const trimmedInput = input.trim().toLowerCase();
    const [command, ...args] = trimmedInput.split(' ');

    if (!trimmedInput) {
      return '';
    }

    if (command === 'clear') {
      setCommandHistory([]);
      return '';
    }

    if (command === 'cd') {
      const section = args[0] as keyof typeof sections;
      if (!section) {
        return 'Usage: cd <section>';
      }
      if (sections[section]) {
        setCurrentDirectory(`~/${section}`);
        return sections[section];
      }
      return `Error: Section "${section}" not found. Use 'ls' to see available sections.`;
    }

    if (commandResponses[command as keyof typeof commandResponses]) {
      return commandResponses[command as keyof typeof commandResponses];
    }

    return `Command not found: ${command}. Type "help" for available commands.`;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const output = executeCommand(inputValue);
    setCommandHistory((prev) => [...prev, `${currentDirectory}$ ${inputValue}`, output].filter(Boolean));
    setInputValue('');

    setTimeout(() => {
      const terminal = document.querySelector('.terminal-content');
      if (terminal) {
        terminal.scrollTop = terminal.scrollHeight;
      }
    }, 0);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-4 font-mono">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-4 p-2 bg-gray-900 rounded">
          <Terminal className="w-5 h-5" />
          <span className="text-sm">Khushi&apos;s Portfolio Terminal</span>
        </div>
        
        <div className="terminal-content bg-gray-900 rounded p-4 min-h-[80vh] max-h-[80vh] overflow-y-auto">
          {commandHistory.map((line, i) => (
            <div key={i} className="whitespace-pre-wrap mb-1">
              {line}
            </div>
          ))}
          
          <form onSubmit={handleSubmit} className="flex items-center">
            <span className="mr-2">
              {currentDirectory}$
            </span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-transparent outline-none"
              autoFocus
              aria-label="Terminal input"
              placeholder="Enter command"
            />
            <span className={`ml-1 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>
              ▋
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CLIPortfolio;
