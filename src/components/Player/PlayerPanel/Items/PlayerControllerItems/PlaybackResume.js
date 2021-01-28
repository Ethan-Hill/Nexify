export default function PlaybackResume({ handleClick }) {
  return (
    <div className="flex items-center">
      <div className="flex justify-center w-12 mr-2">
        <sl-button size="large" onClick={handleClick}>
          <sl-icon name="play"></sl-icon>
        </sl-button>
      </div>
    </div>
  );
}
