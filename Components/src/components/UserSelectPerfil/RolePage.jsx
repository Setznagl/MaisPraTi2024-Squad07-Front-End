import React from "react";
import RoleCard from "./RoleCard";
import "./RolePage.css";

const RolesPage = () => {
    const locadorDetails = [
        { icon: <img src="../../../assets/images/minicar.png" alt="Carro" />, text: "Anunciar seus veículos para aluguel, informando detalhes sobre as condições do veículo e preço." },
        { icon: <img src="../../../assets/images/minimap.png" alt="Mapa" />, text: "Definir filtros de região onde deseja alugar o veículo." },
        { icon: <img src="../../../assets/images/ministar.png" alt="Avaliações" />, text: "Avaliar o motorista após o término da locação." },
    ];

    const locatarioDetails = [
        { icon: <img src="../../../assets/images/minifilter-dark.png" alt="Filtro" />, text: "Buscar veículos disponíveis por meio de filtros como localização, preço e características." },
        { icon: <img src="../../../assets/images/miniphone-dark.png" alt="Telefone" />, text: "Entrar em contato com locadores para negociar sua locação." },
        { icon: <img src="../../../assets/images/ministar-dark.png" alt="Avaliações" />, text: "Avaliar o proprietário após a devolução do veículo." },
    ];

    return (
        <div className="roles-page">
            <RoleCard
                title="Locador"
                descriptionList={locadorDetails}
                buttonText="Desejo ser Locador"
                isDark={false}
            />
            <p className="disclaimer">Para alterar sua opção de usuário (Locador ou Locatário), entre em contato com a equipe de desenvolvedores da plataforma. Essa alteração é feita manualmente para garantir a segurança e consistência dos dados. Nossa equipe estará disponível para ajudá-lo!</p>
            <RoleCard
                title="Locatário"
                descriptionList={locatarioDetails}
                buttonText="Desejo ser Locatário"
                isDark={true}
            />
        </div>
    );
};

export default RolesPage;