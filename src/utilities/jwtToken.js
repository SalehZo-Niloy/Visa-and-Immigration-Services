export const jwtToken = (user, navigate, from, setLoading) => {
    const currentUser = {
        email: user?.email
    }
    fetch('http://localhost:5000/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            localStorage.setItem('nvis-token', data.token);
            if (navigate) {
                navigate(from, { replace: true });
            }
            if (setLoading) {
                setLoading(false);
            }
        })
        .catch(e => console.error(e))
}