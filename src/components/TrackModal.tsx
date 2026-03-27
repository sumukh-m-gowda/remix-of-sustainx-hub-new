import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export interface Track {
  title: string;
  icon: string;
  problems: { title: string; description: string }[];
}

interface Props {
  track: Track | null;
  onClose: () => void;
}

const TrackModal = ({ track, onClose }: Props) => (
  <AnimatePresence>
    {track && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="glass-strong rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
        >
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="text-3xl mb-2 block">{track.icon}</span>
              <h3 className="text-xl font-heading font-bold text-secondary">{track.title}</h3>
            </div>
            <button onClick={onClose} className="text-muted-foreground hover:text-foreground">
              <X size={20} />
            </button>
          </div>
          <div className="space-y-4">
            {track.problems.map((p, i) => (
              <div key={i} className="border border-border/30 rounded-lg p-4">
                <h4 className="font-heading font-semibold text-sm text-primary mb-1">{p.title}</h4>
                <p className="text-muted-foreground text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default TrackModal;
