import { permanentRedirect } from 'next/navigation';

export default function CancellationRedirect() {
  permanentRedirect('/cancellation-policy');
}
