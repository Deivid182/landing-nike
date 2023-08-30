interface ButtonProps {
  label: string;
  iconUrl?: string;
  fullWidth?: boolean;
  backgroundColor?: string;
  borderColor?: string;
  textColor?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  label,
  iconUrl,
  fullWidth,
  borderColor,
  textColor,
  backgroundColor,
  type = 'button',
}) => {
  return (
    <button
      type={type}
      className={`
        flex 
        justify-center 
        items-center 
        gap-2 
        px-7 
        py-4 
        border 
        font-montserrat 
        text-lg 
        leading-none 
        rounded-full 
        ${fullWidth ? 'w-full' : ''}
        ${
          backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : 'bg-coral-red text-white border-coral-red'
        }
        `}
    >
      {label}
      {iconUrl && (
        <img className='ml-2 rounded-full w-5 h-5' src={iconUrl} alt={label} />
      )}
    </button>
  );
};

export default Button;
