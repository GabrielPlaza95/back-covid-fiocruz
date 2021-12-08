import { Strategy as LocalStrategy} from 'passport-local';

const users = [{ 
    _id: 1, 
    username: process.env.USERNAME_ACCOUNT, 
    password: process.env.PASSWORD_ACCOUNT,
}];

function findUser(username){
    return users.find(user => user.username === username);
}

function findUserById(id){
    return users.find(user => user._id === id);
}

export default function(passport) {
    passport.use(new LocalStrategy({
        usernameField: 'user',
        passwordField: 'password',
    },
        async (user, password, done) => {
            try {
                const userFound = findUser(user);

                // usuário inexistente
                if (!userFound) { return done(null, false) }
    
                // comparando as senhas
                const isValid = password == userFound.password;
                if (!isValid) return done(null, false, {message: "failed"})
                
                return done(null, userFound)
            } catch (err) {
                done(err, false);
            }
        }
    ));

    passport.serializeUser((user, done) => {
        done(null, user._id);
    });
    
    passport.deserializeUser((id, done) => {
        try {
            const user = findUserById(id);
            done(null, user);
        } catch (err) {
            done(err, null);
        }
    });
}