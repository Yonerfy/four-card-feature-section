interface TitleProps {
    title: string,
    subtitle: string,
    paragraph: string
}
export const Title = ({title, subtitle, paragraph}: TitleProps) => {
    return (
        <div className="title text-center w-[45%] mb-[2.625em]">
            <h1 className="text-preset-2 grey-500">{title}</h1>
            <h2 className="text-preset-1 grey-500 mb-[.3em]">{subtitle}</h2>
            <p className="text-preset-4 grey-500">{paragraph}</p>
        </div>
    )
}