const persons = () => {
    const person = [
        {
            id: 0,
            name: "Carl Arocha",
            age: 20,
            gender: "Male"
        }
    ]
  return (
    <div>
      {person.length > 0 && <div>
        <h1>Tables</h1>
        <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">Status</th>
            <th scope="col">GENDER</th>
          </tr>
        </thead>
        <tbody>
          {person.map(data => {
            return (
              <tr key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.age < 20 ? "Young" : "Old"}</td>
              <td>{data.gender}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
        </div>}
    </div>
  )
}

export default persons