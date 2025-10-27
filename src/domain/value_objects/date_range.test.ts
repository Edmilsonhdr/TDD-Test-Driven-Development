import { DateRange } from "./date_range";

describe("DateRange Value Object",() =>{
    it("deve lançar um erro se a data de término for antes da data de inicio", () => {
        expect(() => {
            new DateRange(new Date("2024-12-25"), new Date("2024-12-20"));
        }).toThrow("A data de término deve ser posterior á data de inicio")
    });

    it("Deve criar uma instanca de DateRange com a data de inicio e data de termino, e verficar o retorno",() => {
        const startDate = new Date("2024-12-20");
        const endDate = new Date("2024-12-25");
        const daterange = new DateRange(startDate, endDate);
        expect(daterange.getStartDate()).toEqual(startDate);
        expect(daterange.getEndDate()).toEqual(endDate)
    });

    it("Deve calcular o total de noites corretamente", () => {
        const startDate = new Date("2024-12-20");
        const endDate = new Date("2024-12-25");
        const daterange = new DateRange(startDate, endDate);

        const totalNights = daterange.getTotalNights();

        expect(totalNights).toBe(5)
    })
})