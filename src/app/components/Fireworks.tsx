import { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import fireworksAnimation from '../assets/fireworks.json'; // Import file JSON của hoạt hình

const Fireworks: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Hiển thị hoạt hình nổ pháo sau 1 giây khi trang được tải
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
        }, 1000);

        return () => clearTimeout(timeoutId);
    }, []);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: fireworksAnimation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <div>
            {isVisible && (
                <div style={{ position: 'absolute', top: '13%', left: '50%', transform: 'translateX(-50%)', zIndex: 9999 }}>
                    <Lottie options={defaultOptions} height={300} width={169} />
                </div>
            )}
        </div>
    );
};

export default Fireworks;
