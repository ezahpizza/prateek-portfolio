    // Define types for our data structures
    export interface Experience {
        title: string;
        company: string;
        period: string;
        responsibilities: string[];
    }
    
    export interface Education {
        degree: string;
        institution: string;
        period: string;
        details: string[];
    }

    export interface Skill {
        name: string;
        proficiency: number;
    }
    
    // Experience data
    export const experiences: Experience[] = [
        {
        title: "ML Engineer Intern",
        company: "Samsung R&D",
        period: "Nov 2024 - Present",
        responsibilities: [
            "Led data curation and refinement, ensuring high-quality datasets for AI-driven object recognition, which contributed to a 23% improvement in model accuracy and a more seamless user experience.",
            "Reinforced and optimized deep learning models for image super-resolution, achieving a 20% boost in visual clarity metrics and enhancing real-world application performance.",
            "Engaged in performance benchmarking and hyperparameter tuning, refining inference speed and model scalability for deployment in Samsung's ecosystem, while working in collaboration with cross-functional teams, reducing task completion time by 3 hours per week while maintaining high-quality deliverables.",
            "Spearheaded CI/CD pipelines to automate model training, testing, and deployment, ensuring seamless integration with production systems and reducing deployment time."
        ]
        },
        {
        title: "Research Assistant",
        company: "NIT Durgapur",
        period: "Sep 2024 - Present",
        responsibilities: [
            "Engineered FuzzyExtropy, A novel impurity criterion for decision tree classification",
            "Integrated fuzzy membership degrees into Scikit-learn's decision tree algorithm, enhancing classification accuracy by 12% in test scenarios.",
            "Implemented scalable and efficient deployment solutions, improving system stability and maintainability."
        ]
        },
        {
        title: "Quality Analyst",
        company: "Ladder Media",
        period: "Sep 2023 - Jan 2024",
        responsibilities: [
            "Spearheaded end-to-end ETL pipeline development and maintenance, ensuring efficient data ingestion, transformation, and validation for analytical workflows.",
            "Built and deployed machine learning models for lead identification and client engagement optimization, leveraging analytics and generative AI tools to boost engagement by 18%",
            "Optimized model deployment and monitoring, ensuring seamless integration with existing systems while maintaining high accuracy and performance."
        ]
        },
        {
        title: "Data Science Intern",
        company: "PreGrad",
        period: "Feb 2023 - May 2023",
        responsibilities: [
            "Developed and maintained web scraping pipelines to automate data collection from diverse sources, ensuring a steady flow of high-quality data for model training and analytics.",
            "Engineered and optimized machine learning models, fine-tuning hyperparameters and improving feature engineering strategies for increased accuracy and performance."
        ]
        },
        {
        title: "Freelance Developer",
        company: "Self-Employed",
        period: "Sep 2020 - Present",
        responsibilities: [
            "Engineered a full-stack Learning Management System (LMS) with React and Supabase featuring: role-based access, secure PDF workflows for seamless homework management, and real-time data syncing for a home-based tutorial business.",
        ]
        }
    ];
    
    // Education data
    export const educations: Education[] = [
        {
        degree: "Bachelor of Technology",
        institution: "Institute of Technical Education and Research - SOA University",
        period: "Nov 2022 - June 2026",
        details: [
            "Major : Computer Science and Engineering",
            "Minor : Data Science",
            "CGPA : 9.29 / 10"
        ]
        }
    ];
    
    // Skill data
    export const skillCategories = {
        design: [
        { name: "Figma", proficiency: 90 },
        { name: "Photoshop", proficiency: 85 },
        { name: "Illustrator", proficiency: 80 },
        { name: "Ibis Paint X", proficiency: 95 },
        ],
        
        development: [
        { name: "HTML/CSS", proficiency: 95 },
        { name: "JavaScript", proficiency: 85 },
        { name: "React", proficiency: 80 },
        { name: "FastAPI", proficiency: 85 },
        { name: "Flask", proficiency: 85 },
        { name: "MongoDB", proficiency: 85 },
        { name: "MySQL", proficiency: 95 },
        { name: "Postgres", proficiency: 95 },
        { name: "AstraDB", proficiency: 80 },
        { name: "ChromaDB", proficiency: 80 },
        ],
        
        aiMl: [
        { name: "Scikit-Learn", proficiency: 95 },
        { name: "Tensorflow", proficiency: 90 },
        { name: "PyTorch", proficiency: 80 },
        { name: "Hugging Face", proficiency: 95 },
        { name: "LangFlow", proficiency: 95 },
        { name: "LangChain", proficiency: 85 },
        ],
        
        devOps: [
        { name: "Git & GitHub", proficiency: 90 },
        { name: "Docker", proficiency: 85 },
        ]
    };
    
    // Contact information
    export const contactInfo = {
        email: "prateekmsoa@gmail.com",
        location: "Bhubaneshwar, Odisha, IND"
    };