import { useState } from "react";
import axios from "axios";
import { Button } from "antd";
import { useQuery } from "@tanstack/react-query";

interface Registro {
  id: number;
  countryId?: number;
  finalCustomer?: boolean;
  invoicingConcept?: boolean;
  invoicingPeriod?: boolean;
  invoicingStart?: boolean;
  taxBase?: boolean;
  iva?: boolean;
  totalAmount?: boolean;
  language?: string;
  senderMail?: string;
  logoUfinet?: string;
}

const VerRegistros = () => {
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 9;

  const url = "https://localhost:7093/api/registros";

  const getRegistros = async () => {
    const response = await axios.get<Registro[]>(url);
    const { data } = response;
    return data;
  };

  useQuery(["registros"], getRegistros, { onSuccess: setRegistros });

  const totalPages = Math.ceil(registros.length / pageSize);
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, registros.length);
  const currentData = registros.slice(startIndex, endIndex);

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="verRegistros">            
            <table className="responsive-table-ver-registros">
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Country ID</th>
                    <th>Final Customer</th>
                    <th>Invoicing Concept</th>
                    <th>Invoicing Period</th>
                    <th>Invoicing Start</th>
                    <th>Tax Base</th>
                    <th>IVA</th>
                    <th>Total Amount</th>
                    <th>Language</th>
                    <th>Sender Mail</th>
                    <th>Logo Ufinet</th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((item) => (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.countryId}</td>
                            <td>{item.finalCustomer}</td>
                            <td>{item.invoicingConcept}</td>
                            <td>{item.invoicingPeriod}</td>
                            <td>{item.taxBase}</td>
                            <td>{item.iva}</td>
                            <td>{item.totalAmount}</td>
                            <td>{item.language}</td>
                            <td>{item.senderMail}</td>
                            <td>{item.logoUfinet}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="container-buttons">
                <span>
                    Page {currentPage} - {totalPages}
                </span>
                <Button
                    className="pagination"
                    onClick={goToPreviousPage}
                    disabled={currentPage === 1}
                >
                    Previous
                </Button>
                <Button
                    className="pagination"
                    onClick={goToNextPage}
                    disabled={currentPage === totalPages}
                >
                    Next
                </Button>
            </div>
            
        </div>
  );
};

export default VerRegistros;
