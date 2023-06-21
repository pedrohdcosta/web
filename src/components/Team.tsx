interface Props{
    imgSrc: string
    nomeMembro: string
}

const Team = ({imgSrc, nomeMembro}:Props ) => {
    return (
        <div className="flex items-center mx-auto w-full justify-center">
            <div>
                <img src={imgSrc} alt="" height={200} width={200}/>
            </div>
            <div className="ml-8">
                <h2>
                    {nomeMembro}
                </h2>
            </div>
        </div>
    )
}

export default Team