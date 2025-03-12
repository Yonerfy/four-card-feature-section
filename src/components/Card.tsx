interface CardProps {
    title: string,
    description: string,
    img: string,
    borderColor: string,
    gridArea: string
}
export const Card = ({title, description, img, borderColor, gridArea}: CardProps) => {
    
    return (
        <div className={`card flex flex-col p-[2em] bg-white rounded-lg shadow-lg  ${gridArea}`} 
            style={{ borderTopColor: `${borderColor}`, borderTopWidth: '.4em', borderStyle: 'solid' }}>
            <div className="card__header">
                <h3 className="text-preset-3 mb-4 grey-500">{title}</h3>
                <p className="text-preset-5 mb-[4em] grey-400">{description}</p>
            </div>
            <div className="card__img self-end">
                <img src={img} alt={title} className="" />
            </div>
        </div>
    )
}