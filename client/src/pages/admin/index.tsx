import { useUser } from '@auth0/nextjs-auth0/client';

export default function admin() {

    
    const { user, error, isLoading } = useUser();
    console.log(user);
    const picture = user?.picture ?? '/default-profile-pic.jpg';
    return(
        <>
            {user ? 
            <>
            <p>Welcome back, {user.nickname}</p>
            <img style={{borderRadius: "50%"}} src={picture} />
            <button>
                <a href='/api/auth/logout'>Logout</a>
            </button>
            </>
            : null }
        </>
    )
}