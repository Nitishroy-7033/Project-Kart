const IconButton = ({ icon, onClick,background,color,radius })=>{

return (
    <div
    onClick={onClick}
    style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        padding: "5px",
        borderRadius: radius || "30%",
        background: background,
        color: color,
    }}
    >
    {icon}
    </div>
);
}

export default IconButton;