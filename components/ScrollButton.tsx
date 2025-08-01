'use client'

interface ScrollButtonProps {
  targetId: string;
}

export default function ScrollButton({ targetId }: ScrollButtonProps) {
  const handleClick = () => {
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button onClick={handleClick}>
    </button>
  );
}
