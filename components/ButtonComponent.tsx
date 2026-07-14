import LinkComponent from '@/components/LinkComponent';

type ButtonProps = Omit<Link, 'children'> & {
    className?: string;
};

export default function ButtonComponent({ className = '', ...link }: ButtonProps) {
    return (
        <LinkComponent
            {...link}
            className={`group ps-[15px] pe-[10px] py-[10px] bg-black text-white link flex items-center justify-center ${className}`}
        >
            {link.label}
            <div className="ms-[10px] transition-transform duration-300 lg:group-hover:rotate-45">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="block">
                    <circle cx="9" cy="9" r="8.4" stroke="white" strokeWidth="1.2" />
                    <path d="M11.3999 11.4001V6.6001H6.59985M11.3999 6.6001L6.59985 11.4001" stroke="white" strokeWidth="1.2" />
                </svg>
            </div>
        </LinkComponent>
    );
}
