// Button functionality fix for StoryPixelPress website
// This script adds click handlers to buttons that should open external links

document.addEventListener("DOMContentLoaded", function() {
    // Define the button mappings based on the data structure
    const buttonMappings = [
        // Burnt Out But Still Loving
        { text: "Get on Payhip", url: "https://payhip.com/b/HJR4C", index: 0 },
        { text: "Get on Gumroad", url: "https://storypixel.gumroad.com/l/nyyzof", index: 0 },
        
        // Calm Parenting Bundle
        { text: "Get on Payhip", url: "https://payhip.com/b/48fMi", index: 1 },
        { text: "Get on Gumroad", url: "https://storypixel.gumroad.com/l/gzmdol", index: 1 },
        
        // Baby Sleep SOS
        { text: "Get on Payhip", url: "https://payhip.com/b/UqRtH", index: 2 },
        { text: "Get on Gumroad", url: "https://storypixel.gumroad.com/l/wquei", index: 2 },
        
        // Tame the Tantrums
        { text: "Get on Payhip", url: "https://payhip.com/b/GaB7k", index: 3 },
        { text: "Get on Gumroad", url: "https://storypixel.gumroad.com/l/jujbzc", index: 3 }
    ];

    // Get all buttons
    const buttons = document.querySelectorAll("button");
    
    // Track which guide section we're in
    let payhipIndex = 0;
    let gumroadIndex = 0;
    
    buttons.forEach((button, buttonIndex) => {
        const buttonText = button.textContent.trim();
        
        if (buttonText === "Get on Payhip") {
            const mapping = buttonMappings.find(m => m.text === "Get on Payhip" && m.index === payhipIndex);
            if (mapping) {
                button.addEventListener("click", function(e) {
                    e.preventDefault();
                    window.open(mapping.url, "_blank");
                });
                button.style.cursor = "pointer";
                payhipIndex++;
            }
        } else if (buttonText === "Get on Gumroad") {
            const mapping = buttonMappings.find(m => m.text === "Get on Gumroad" && m.index === gumroadIndex);
            if (mapping) {
                button.addEventListener("click", function(e) {
                    e.preventDefault();
                    window.open(mapping.url, "_blank");
                });
                button.style.cursor = "pointer";
                gumroadIndex++;
            }
        } else if (buttonText === "Browse Guides" || buttonText === "Explore Our Guides") {
            // Scroll to guides section
            button.addEventListener("click", function(e) {
                e.preventDefault();
                const guidesSection = document.querySelector("h2");
                if (guidesSection && guidesSection.textContent.includes("Our Parenting Guides")) {
                    guidesSection.scrollIntoView({ behavior: "smooth" });
                }
            });
            button.style.cursor = "pointer";
        } else if (buttonText.includes("Shop Our Guides")) {
            // Scroll to guides section
            button.addEventListener("click", function(e) {
                e.preventDefault();
                const guidesSection = document.querySelector("h2");
                if (guidesSection && guidesSection.textContent.includes("Our Parenting Guides")) {
                    guidesSection.scrollIntoView({ behavior: "smooth" });
                }
            });
            button.style.cursor = "pointer";
        } else if (buttonText.includes("Join Our Community")) {
            // Link to Facebook page
            button.addEventListener("click", function(e) {
                e.preventDefault();
                window.open("https://www.facebook.com/StoryPixelPress", "_blank");
            });
            button.style.cursor = "pointer";
        } else if (buttonText.includes("Join Our Parent Updates") || buttonText.includes("Subscribe to Updates")) {
            // Placeholder for newsletter signup - could be connected to actual service
            button.addEventListener("click", function(e) {
                e.preventDefault();
                alert("Newsletter signup functionality would be implemented here. Please contact StoryPixelPress directly for updates.");
            });
            button.style.cursor = "pointer";
        }
    });
    
    // Update footer links
    const footerLinks = document.querySelectorAll("footer a");
    footerLinks.forEach(link => {
        const linkText = link.textContent.trim();
        if (linkText === "Privacy") {
            link.href = "https://docs.google.com/document/d/1SuXZOQwR_AF7WjO25dK_0MZdl6JqGKuUK1eUpghfMxw/edit?usp=sharing";
            link.target = "_blank";
        } else if (linkText === "Terms") { // Assuming "Terms" is the text for Terms of Service
            link.href = "https://docs.google.com/document/d/1UIOpm7Fm487CiZPv95NZHrg451v4r0pKMakhL_poCg4/edit?usp=sharing";
            link.target = "_blank";
        } else if (linkText === "Contact") {
            link.href = "https://docs.google.com/document/d/1GTEhUplNpTxsYJxTnydMk0fqcSTVpnpc3QhM2AgNcAY/edit?usp=sharing";
            link.target = "_blank";
        }
    });

    console.log("Button and footer link functionality has been updated.");
});

