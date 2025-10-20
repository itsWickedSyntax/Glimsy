import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="container mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Glimsy. All rights reserved.</p>
                <div className="flex justify-center space-x-4 mt-2">
                    <a href="https://www.instagram.com/glimsy" target="_blank" rel="noopener noreferrer">Instagram</a>
                    <a href="https://www.facebook.com/glimsy" target="_blank" rel="noopener noreferrer">Facebook</a>
                    <a href="https://www.twitter.com/glimsy" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;