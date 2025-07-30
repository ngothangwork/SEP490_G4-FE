import React from 'react';

const RatingStar = ({
                        rating = 0,
                        maxStars = 5,
                        size = 'md',
                        readonly = true,
                        onRatingChange = null,
                        className = ''
                    }) => {
    const sizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6',
        xl: 'w-8 h-8'
    };

    const handleStarClick = (starValue) => {
        if (!readonly && onRatingChange) {
            onRatingChange(starValue);
        }
    };

    return (
        <div className={`flex items-center gap-1 ${className}`}>
            {[...Array(maxStars)].map((_, index) => {
                const starValue = index + 1;
                const isFilled = starValue <= rating;

                return (
                    <button
                        key={index}
                        type="button"
                        onClick={() => handleStarClick(starValue)}
                        disabled={readonly}
                        className={`
                            ${sizeClasses[size]}
                            ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'}
                            transition-all duration-200 ease-in-out
                            ${isFilled ? 'text-yellow-400' : 'text-gray-300'}
                            ${!readonly ? 'hover:transform hover:scale-110' : ''}
                            focus:outline-none
                            ${!readonly ? 'focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 rounded' : ''}
                        `}
                    >
                        <svg
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full"
                        >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                    </button>
                );
            })}
            {!readonly && (
                <span className="ml-2 text-sm text-gray-600 font-medium">
                    {rating}/{maxStars}
                </span>
            )}
        </div>
    );
};

export default RatingStar;
