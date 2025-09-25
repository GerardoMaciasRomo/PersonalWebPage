
// icon: el componente del icono de react-icons (por ejemplo FaGithub)
// url: el link a tu red social
function SocialButton({ icon: Icon, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-cyan-600 to-cyan-900 text-white rounded-full hover:bg-blue-700 hover:scale-110 transition-colors"
    >
      <Icon size={24} />
    </a>
  );
}

export default SocialButton;

