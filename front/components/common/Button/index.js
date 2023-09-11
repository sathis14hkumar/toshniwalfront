import ButtonBootstrap from 'react-bootstrap/Button';

export default function Button({
    customRootClass = "",
    children,
}) {
    return (
        <button type="button" className={`btn btn-outline-dark ${customRootClass}`}>
            {children}
        </button>
    )
}
