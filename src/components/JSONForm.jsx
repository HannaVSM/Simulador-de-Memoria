function JSONForm() {
    return (
        <div>
            <h1>Asignación por JSON</h1>

            <div>
                <textarea
                    placeholder={
                        `{
                            "clave": "valor",
                            "array": [1, 2, 3],
                            "objeto": 9873,
                        }`
                    }
                    rows={10} // Puedes ajustar la cantidad de filas según tus necesidades
                />
            </div>

            <button>
                Asignar
            </button>
        </div>
    )
}

export default JSONForm