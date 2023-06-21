interface Props {
    children: React.ReactNode;
}

const Button = ({children}: Props) => {
    return(
        <a className="rounded-2xl bg-rose-800 cursor-pointer px-4 py-1 transition hover:brightness-90">
            {children}
        </a>
    )
}

export default Button