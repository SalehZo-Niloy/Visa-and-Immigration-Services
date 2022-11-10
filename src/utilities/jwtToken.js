export const jwtToken = (user, navigate, from, setLoading) => {
    const currentUser = {
        email: user?.email
    }
    fetch('https://assignment-11-server-five-beta.vercel.app/jwt', {
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

            //----------------------------
            // redirecting to previous page
            //----------------------------
            if (navigate) {
                navigate(from, { replace: true });
            }

            //----------------------------
            // setting loading to false for registration process only
            //----------------------------
            if (setLoading) {
                setLoading(false);
            }
        })
        .catch(e => console.error(e))
}