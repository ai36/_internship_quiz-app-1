const iconComponents = {
    close: (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="19.65" cy="19.65" r="15.15" stroke="currentColor" strokeWidth="3" />
            <path
                d="M24.7763 16.0624C25.2018 15.6368 25.2018 14.9458 24.7763 14.5203C24.3508 14.0948 23.6598 14.0948 23.2343 14.5203L19.6498 18.1082L16.0619 14.5237C15.6364 14.0982 14.9453 14.0982 14.5198 14.5237C14.0943 14.9492 14.0943 15.6402 14.5198 16.0658L18.1077 19.6503L14.5232 23.2382C14.0977 23.6637 14.0977 24.3547 14.5232 24.7802C14.9487 25.2057 15.6398 25.2057 16.0653 24.7802L19.6498 21.1923L23.2377 24.7768C23.6632 25.2023 24.3542 25.2023 24.7797 24.7768C25.2052 24.3513 25.2052 23.6603 24.7797 23.2348L21.1918 19.6503L24.7763 16.0624Z"
                fill="currentColor"
                stroke="currentColor"
            />
        </svg>
    ),

    enter: (
        <svg width="12" height="8" viewBox="0 0 12 8" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M3.45 7.23 1 4.82l2.45-2.41v4.82zm-.78-1.82V4.22h6.47v1.19H2.67zm5.31 0V.73h1.18v4.68H7.98z" />
        </svg>
    ),

    minus: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="23" stroke="currentColor" strokeWidth="4" />
            <path
                d="M39 30.3846C39 31.1505 38.3813 31.7692 37.6154 31.7692H22.3846C21.6187 31.7692 21 31.1505 21 30.3846C21 29.6187 21.6187 29 22.3846 29H37.6154C38.3813 29 39 29.6187 39 30.3846Z"
                fill="currentColor"
                stroke="currentColor"
            />
        </svg>
    ),
    plus: (
        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="23" stroke="currentColor" strokeWidth="4" />
            <path
                d="M31.3846 22.3846C31.3846 21.6187 30.7659 21 30 21C29.2341 21 28.6154 21.6187 28.6154 22.3846V28.6154H22.3846C21.6187 28.6154 21 29.2341 21 30C21 30.7659 21.6187 31.3846 22.3846 31.3846H28.6154V37.6154C28.6154 38.3813 29.2341 39 30 39C30.7659 39 31.3846 38.3813 31.3846 37.6154V31.3846H37.6154C38.3813 31.3846 39 30.7659 39 30C39 29.2341 38.3813 28.6154 37.6154 28.6154H31.3846V22.3846Z"
                fill="currentColor"
                stroke="currentColor"
            />
        </svg>
    ),

    success: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <rect
                x="8.30908"
                y="10.7617"
                width="5.69008"
                height="1.32552"
                rx="0.662759"
                transform="rotate(47.7496 8.30908 10.7617)"
                fill="currentColor"
                stroke="currentColor"
                strokeLinejoin="round"
            />
            <rect
                x="17.7681"
                y="9.16309"
                width="9.37251"
                height="1.32552"
                rx="0.662759"
                transform="rotate(134.255 17.7681 9.16309)"
                fill="currentColor"
                stroke="currentColor"
                strokeLinejoin="round"
            />
        </svg>
    ),

    wrong: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
            <path
                d="M15.7256 9.39261C16.0349 9.08338 16.0349 8.58119 15.7256 8.27196C15.4164 7.96273 14.9142 7.96273 14.605 8.27196L12 10.8794L9.39261 8.27444C9.08338 7.96521 8.58119 7.96521 8.27196 8.27444C7.96273 8.58367 7.96273 9.08585 8.27196 9.39508L10.8794 12L8.27444 14.6075C7.96521 14.9167 7.96521 15.4189 8.27444 15.7281C8.58367 16.0373 9.08585 16.0373 9.39508 15.7281L12 13.1207L14.6075 15.7256C14.9167 16.0349 15.4189 16.0349 15.7281 15.7256C16.0373 15.4164 16.0373 14.9142 15.7281 14.605L13.1207 12L15.7256 9.39261Z"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="0.5"
            />
        </svg>
    ),
};

export function Icon({ name }) {
    return iconComponents[name];
}
