// Project data for portfolio website
const projectsData = {
    "multipay": {
        title: "Multipay",
        category: "Payment Systems",
        brief: "A comprehensive payment gateway integration system that supports multiple payment methods and providers.",
        role: "Developer, Continues, and Maintainer",
        timeline: "2023 - Present",
        technologies: ["PHP", "Laravel", "MySQL", "RESTful API", "Payment Gateway Integrations"],
        mainImage: "../assets/img/img_1_big.jpg",
        galleryImages: [
            "../assets/img/img_2.jpg",
            "../assets/img/img_3.jpg",
            "../assets/img/img_4.jpg"
        ],
        description: "Multipay is a unified payment solution that integrates various payment gateways and methods into a single, easy-to-use platform. It allows businesses to accept payments through multiple channels while providing a consistent experience to end-users.",
        challenges: "The primary challenges involved ensuring seamless integration with multiple payment providers, each with their own APIs and requirements, while maintaining high transaction security and reliability. Another challenge was implementing proper error handling and transaction reconciliation across different payment systems.",
        solution: "Developed a modular architecture that abstracts payment provider specifics behind a unified API, allowing new payment methods to be added with minimal changes to the core system. Implemented robust security measures including encryption for sensitive data and comprehensive logging for audit trails.",
        implementation: "Created a microservices-based architecture where each payment provider has its own service module. Implemented queuing systems for asynchronous processing of payments and notifications. Developed comprehensive testing suites including unit tests and integration tests with provider sandboxes.",
        results: "Successfully processed thousands of transactions with a 99.9% success rate. Reduced payment integration time for new providers from weeks to days. Improved transaction monitoring and reporting capabilities, leading to faster resolution of payment issues."
    },
    "mds": {
        title: "MDS (Content Management System)",
        category: "Content Management",
        brief: "A specialized content management system designed for managing digital assets and content workflows.",
        role: "Backend Developer",
        timeline: "2022 - 2023",
        technologies: ["PHP", "Laravel", "MySQL", "Vue.js", "RESTful API"],
        mainImage: "../assets/img/img_5_big.jpg",
        galleryImages: [
            "../assets/img/img_5.jpg",
            "../assets/img/img_6.jpg",
            "../assets/img/img_1.jpg"
        ],
        description: "MDS is a content management system that allows organizations to efficiently manage their digital content, assets, and publications. It provides sophisticated workflows, versioning, and publishing capabilities tailored to specific industry needs.",
        challenges: "The main challenges included developing a flexible content model that could accommodate various content types while maintaining performance with large volumes of content and assets. Managing complex publishing workflows with multiple approval stages was also challenging.",
        solution: "Implemented a dynamic content type system that allows administrators to define custom content structures. Used caching strategies to improve performance for content retrieval. Developed a flexible workflow engine that can be configured for different organizational needs.",
        implementation: "Built on Laravel with a Vue.js frontend for the administrative interface. Implemented a RESTful API for content delivery to various platforms. Used Redis for caching frequently accessed content and MySQL for persistent storage.",
        results: "Reduced content publishing time by 60% through streamlined workflows. Improved content reusability across different channels. Enhanced search capabilities leading to better content discovery and utilization."
    },
    "gbkgate": {
        title: "GBK Gate",
        category: "E-Ticketing",
        brief: "An electronic ticketing system for venue access control and management.",
        role: "Backend Developer",
        timeline: "2021 - 2022",
        technologies: ["PHP", "Laravel", "MySQL", "API Integration", "QR Code Technology"],
        mainImage: "../assets/img/img_3_big.jpg",
        galleryImages: [
            "../assets/img/img_1.jpg",
            "../assets/img/img_2.jpg",
            "../assets/img/img_6.jpg"
        ],
        description: "GBK Gate is an electronic ticketing system designed for venue access control and management. It handles ticket sales, validation, and access control for events at the Gelora Bung Karno sports complex and other venues.",
        challenges: "Key challenges included developing a scalable system that could handle peak loads during major events, implementing secure ticket validation to prevent fraud, and integrating with various sales channels and payment systems.",
        solution: "Created a distributed architecture that could scale horizontally during high-demand periods. Implemented cryptographic ticket validation with QR codes that couldn't be duplicated. Developed a comprehensive API for integration with multiple sales platforms.",
        implementation: "Used Laravel for the backend services with a separate API layer for integrations. Implemented real-time validation using websockets for gate controllers. Used caching extensively to handle high-volume ticket validation at entry points.",
        results: "Successfully deployed for multiple large-scale events with attendance of over 50,000 people. Reduced entry time by 40% compared to previous systems. Virtually eliminated ticket fraud through secure validation methods."
    },
    "smt": {
        title: "SMT (System Management Tool)",
        category: "API Integration",
        brief: "An integrated management system that connects various business processes through API integrations.",
        role: "API Integration Specialist",
        timeline: "2020 - 2021",
        technologies: ["PHP", "Laravel", "API Development", "MySQL", "Message Queues"],
        mainImage: "../assets/img/img_4_big.jpg",
        galleryImages: [
            "../assets/img/img_4.jpg",
            "../assets/img/img_5.jpg",
            "../assets/img/img_3.jpg"
        ],
        description: "SMT is a system management tool that integrates various business systems and processes through a unified API layer. It provides a single interface for managing data across different departments and systems.",
        challenges: "The primary challenge was integrating with legacy systems that had limited or non-standard APIs. Ensuring data consistency across different systems with varying data models was also difficult.",
        solution: "Developed adapter patterns for each system integration that normalized data formats. Implemented a robust error handling and retry mechanism for unreliable system connections. Created a central data warehouse for reporting across systems.",
        implementation: "Built using Laravel with a service-oriented architecture. Used message queues for asynchronous processing of cross-system operations. Implemented comprehensive logging and monitoring for integration points.",
        results: "Reduced manual data entry by 80% through automated system integrations. Improved data accuracy by eliminating duplicate entries across systems. Provided real-time visibility into cross-department processes."
    },
    "pas": {
        title: "PAS (Process Automation System)",
        category: "Content Management",
        brief: "A workflow automation system that streamlines business processes and document management.",
        role: "Full Stack Developer",
        timeline: "2019 - 2020",
        technologies: ["PHP", "Laravel", "Vue.js", "MySQL", "Workflow Engine"],
        mainImage: "../assets/img/img_2_big.jpg",
        galleryImages: [
            "../assets/img/img_3.jpg",
            "../assets/img/img_1.jpg",
            "../assets/img/img_5.jpg"
        ],
        description: "PAS is a process automation system that helps organizations digitize and automate their workflows and document management. It provides tools for creating custom workflows, form generation, and process monitoring.",
        challenges: "The main challenges included designing a flexible workflow engine that could model complex business processes, implementing document versioning and access control, and ensuring the system remained user-friendly despite its complexity.",
        solution: "Created a visual workflow designer that allowed non-technical users to create and modify process workflows. Implemented a comprehensive document management system with versioning and access controls. Developed customizable dashboards for process monitoring.",
        implementation: "Used Laravel for the backend with Vue.js for interactive frontend components. Implemented a state machine for workflow management and MySQL for data storage with proper transaction handling for process integrity.",
        results: "Reduced process completion time by 50% for key business workflows. Improved compliance with regulatory requirements through better documentation and audit trails. Enhanced visibility into process bottlenecks leading to further optimizations."
    },
    "dolan": {
        title: "Dolan",
        category: "Payment & API Integration",
        brief: "A travel and tourism platform with integrated payment processing and third-party service APIs.",
        role: "Backend Developer",
        timeline: "2018 - 2019",
        technologies: ["PHP", "Laravel", "MySQL", "Payment Integration", "Third-party APIs"],
        mainImage: "../assets/img/img_6_big.jpg",
        galleryImages: [
            "../assets/img/img_6.jpg",
            "../assets/img/img_4.jpg",
            "../assets/img/img_2.jpg"
        ],
        description: "Dolan is a travel and tourism platform that allows users to discover, plan, and book travel experiences. It integrates with various service providers for accommodations, transportation, and activities through API connections.",
        challenges: "Key challenges included integrating with numerous travel service APIs that had different formats and requirements, implementing a secure payment processing system, and managing the complexity of travel bookings with multiple components.",
        solution: "Developed a unified API layer that standardized interactions with various travel service providers. Created a modular booking system that could handle complex itineraries with multiple services. Implemented a secure payment processing system with support for multiple payment methods.",
        implementation: "Built on Laravel with a service-oriented architecture. Used a combination of real-time API calls and cached data to optimize performance. Implemented comprehensive error handling for dealing with external service failures.",
        results: "Successfully processed thousands of travel bookings with integration to over 20 service providers. Achieved 99.5% uptime for the booking platform. Reduced booking abandonment by 30% through a streamlined payment process."
    }
};

// Function to load project data based on URL parameter
function loadProjectData() {
    // Set a default image if none is provided for a project
    const defaultImage = "../assets/img/img_1_big.jpg";
    // Get the project parameter from URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project');
    
    // If no project specified, load default project or show message
    if (!projectId || !projectsData[projectId]) {
        document.getElementById('project-title').innerText = 'Project Details';
        document.getElementById('project-summary').innerText = 'Please select a project from the portfolio page.';
        document.getElementById('sidebar-title').innerText = 'No Project Selected';
        return;
    }
    
    // Load the project data
    const project = projectsData[projectId];
    
    // Update page title
    document.title = `${project.title} - Portfolio`;
    
    // Update header section
    document.getElementById('project-title').innerText = project.title;
    document.getElementById('project-summary').innerText = project.brief;
    
    // Update main content sections
    document.getElementById('project-description').innerText = project.description;
    document.getElementById('project-challenges').innerText = project.challenges;
    document.getElementById('project-solution').innerText = project.solution;
    document.getElementById('project-implementation').innerText = project.implementation;
    document.getElementById('project-results').innerText = project.results;
    
    // Update sidebar
    document.getElementById('sidebar-title').innerText = project.title;
    document.getElementById('project-category').innerText = project.category;
    document.getElementById('project-brief').innerText = project.brief;
    document.getElementById('project-role').innerText = project.role;
    document.getElementById('project-timeline').innerText = project.timeline;
    
    // Update technologies list
    const techList = document.getElementById('project-tech-list');
    techList.innerHTML = ''; // Clear existing items
    
    if (project.technologies && project.technologies.length > 0) {
        project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.textContent = tech;
            techList.appendChild(li);
        });
    }
    
    // Hide project link if not available
    const linkContainer = document.getElementById('project-link-container');
    if (project.projectUrl) {
        document.getElementById('project-link').href = project.projectUrl;
        linkContainer.style.display = 'block';
    } else {
        linkContainer.style.display = 'none';
    }
    
    // Set the main project image
    const mainImage = document.querySelector('.col-md-8 > img.img-fluid');
    if (mainImage) {
        mainImage.src = project.mainImage || defaultImage;
        mainImage.alt = project.title;
    }
    
    // Set gallery images if they exist
    const galleryImages = document.querySelectorAll('.project-gallery img.img-fluid');
    if (galleryImages.length > 0 && project.galleryImages && project.galleryImages.length > 0) {
        for (let i = 0; i < Math.min(galleryImages.length, project.galleryImages.length); i++) {
            galleryImages[i].src = project.galleryImages[i];
            galleryImages[i].alt = `${project.title} - Image ${i+1}`;
        }
    }
}

// Load project data when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadProjectData);
