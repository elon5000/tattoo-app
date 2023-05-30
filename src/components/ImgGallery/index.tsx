
type Props = {
    imgs: string[]
}

export default function ImgGallery({ imgs }: Props) {
    return <ul className="flex align-stretch h-[200px]">
        {imgs.map((imgUrl, idx) => {
            return <li className="mx-2 min-w-[250px]" key={idx}>
                <img
                    src={imgUrl}
                    alt="Flash tattoo"
                    className="object-contain h-full w-full"
                />
            </li>
        })}
    </ul>
}