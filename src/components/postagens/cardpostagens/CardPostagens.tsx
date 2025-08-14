import { Link } from 'react-router-dom'
import type Postagem from '../../../models/Postagem'

interface CardPostagensProps {
    postagem: Postagem
}

function CardPostagem({ postagem }: CardPostagensProps) {
    return (
        <div className='border-slate-900 border 
            flex flex-col rounded overflow-hidden justify-between'>
                
            <div>
                <div className="flex w-full bg-[#C6AC8F] py-2 px-4 items-center gap-4">
                    <img
                    src={postagem.usuario?.foto || 'https://ik.imagekit.io/dx8zsh14om/user-pic.png'}
                    onError={(e) => e.currentTarget.src = 'https://ik.imagekit.io/dx8zsh14om/user-pic.png'}
                    alt="Foto do usuário"
                    className="w-8 rounded-full"
                    />

                    <h3 className='text-lg font-bold text-center uppercase'>
                        {postagem.usuario?.nome}
                    </h3>
                </div>
                <div className='p-4 '>
                    <h4 className='text-lg font-semibold uppercase'>{postagem.titulo}</h4>
                    <p>{postagem.texto}</p>
                    <p>Tema: {postagem.tema?.descricao}</p>
                    <p>Data: {new Intl.DateTimeFormat(undefined, {
                        dateStyle: 'full',
                        timeStyle: 'medium',
                    }).format(new Date(postagem.data))}</p>
                </div>
            </div>
            <div className="flex">
                <Link to={`/editarpostagem/${postagem.id}`}
	            className='w-full text-slate-100 bg-[#6b705c] hover:bg-[#3f4238]
                flex items-center justify-center py-2'>
	            <button>Editar</button>
                </Link>

                <Link to={`/deletarpostagem/${postagem.id}`} 
	            className='text-white bg-red-400 
	            hover:bg-red-700 w-full flex items-center justify-center'>
	            <button>Deletar</button>
                </Link>
            </div>
        </div>
    )
}

export default CardPostagem;