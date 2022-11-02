
interface HomeProps {
  count: number;
}

export default function Home(props: HomeProps) {

  return (
    <>
      <h1>Hello NLW</h1>
      <hr />
      <h3>Contagem: {props.count}</h3>
    </>
  )
}


export const getServerSideProps = async () => {
  const response = await fetch('http://localhost:3333/pools/count')
  const data = await response.json();

  return {
    props: {
      count: data.count,
    }
  }
}