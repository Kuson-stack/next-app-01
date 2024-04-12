import Link from 'next/link';

export function LinkToRegister() {
    return (
      <div className='mt-4 text-center'>
        Don&apos;t have an account?&nbsp;
        <Link className='underline' href='/register'>Sign Up</Link>
      </div>
    );
  }