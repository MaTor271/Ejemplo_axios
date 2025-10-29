

const Post = ({title, body}) => {
  return (
    <>
        <h1 className='font-serif text-2xl font-bold p-4 mb-4 '>{title}</h1> 
        <p className = 'border text-sky-600 bg-lime-100'>{body}</p>
    </>   
  )
}

export default Post