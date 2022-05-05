export function ImgWithDefault({ src, defaultImgPath, alt = false, className }) {
    return (
        <img
            className={className}
            src={src}
            alt={alt ? alt : 'image'}
            onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = defaultImgPath;
            }} />
    );
}
