import React, { useState } from 'react';

const KalkulatorMatriks = () => {
    const [Matriks_A, setMatriksA] = useState([[0, 0], [0, 0]]);
    const [Matriks_B, setMatriksB] = useState([[0, 0], [0, 0]]);
    const [hasil, setHasil] = useState([[0, 0], [0, 0]]);

    const handleInputChange = (matriks, baris, kolom, value) => {
        const hasilMatriks = matriks === 'A' ? [...Matriks_A] : [...Matriks_B];
        hasilMatriks[baris][kolom] = parseFloat(value)

        if (matriks === 'A') setMatriksA(hasilMatriks);
        else setMatriksB(hasilMatriks);
    };

    const pertambahanMatriks = () => {
        const res = [
            [Matriks_A[0][0] + Matriks_B[0][0], Matriks_A[0][1] + Matriks_B[0][1]],
            [Matriks_A[1][0] + Matriks_B[1][0], Matriks_A[1][1] + Matriks_B[1][1]],
        ];
        setHasil(res);
    };

    const penguranganMatriks = () => {
        const res = [
            [Matriks_A[0][0] - Matriks_B[0][0], Matriks_A[0][1] - Matriks_B[0][1]],
            [Matriks_A[1][0] - Matriks_B[1][0], Matriks_A[1][1] - Matriks_B[1][1]],
        ];
        setHasil(res);
    };

    const perkaliannMatriks = () => {
        const res = [
            [Matriks_A[0][0] * Matriks_B[0][0], Matriks_A[0][1] * Matriks_B[0][1]],
            [Matriks_A[1][0] * Matriks_B[1][0], Matriks_A[1][1] * Matriks_B[1][1]],
        ];
        setHasil(res);
    };

    const clearMatriks_A = () => {
        setMatriksA([[0, 0], [0, 0]]);
    };

    const clearMatriks_B = () => {
        setMatriksB([[0, 0], [0, 0]]);
    };
    const clearMatriks_All = () => {
        setMatriksA([[0, 0], [0, 0]]);
        setMatriksB([[0, 0], [0, 0]]);
        setHasil([[0, 0], [0, 0]]);
    };

return (
    <div>
        <h1>Kalkulator Matriks Ordo 2x2</h1>
        <h2>Mochamad Adam Miftah Faridl (242505001)</h2>
        <div>
            <h2>Matriks A</h2>
            {Matriks_A.map((baris, i) => (
                <div key={i}>
                    {baris.map((val, j) => (
                        <input
                        key={j}
                        type="number"
                        value={Matriks_A[i][j]}
                        onChange={(e) => handleInputChange('A', i, j, e.target.value)}
                        />
                    ))}
                </div>
            ))}

            <button onClick={clearMatriks_A}>Clear Matriks A</button>

        </div>

        <div>
            <h2>Matriks B</h2>
            {Matriks_A.map((baris, i) => (
                <div key={i}>
                    {baris.map((val, j) => (
                        <input
                        key={j}
                        type="number"
                        value={Matriks_B[i][j]}
                        onChange={(e) => handleInputChange('B', i, j, e.target.value)}
                        />
                    ))}
                </div>
            ))}

            <button onClick={clearMatriks_B}>Clear Matriks B</button>

        </div>

        <div>
            <h2>Hasil</h2>
            {hasil.map((baris, i) => (
                <div key={i}>
                    {baris.map((val, j) => (
                        <input key={j} type="text" value={val} ReadOnly />
                    ))}
                </div>
            ))}

            <button onClick={clearMatriks_All}>Clear All</button>

            <h2>Operasi Hitung</h2>

            <button onClick={pertambahanMatriks}>Penambahan</button>
            <button onClick={penguranganMatriks}>Pengurangan</button>
            <button onClick={perkaliannMatriks}>Perkalian</button>

        </div>
    </div>
);
};

export default KalkulatorMatriks