# workspace-demo
# კლონირება

git clone https://github.com/your-organization/myvideo-workspace.git
cd myvideo-workspace

# pnpm-ის დაყენება (თუ არ გაქვს)

npm install -g pnpm

# პროექტის დეპენდენციების დაყენება

pnpm install

# პაკეტების აწყობა (API, HOOKS, UTILS)

pnpm build:packages

# თუ ზედა ბრძანება არ მუშაობს, დააბილდე თითოეული ცალ-ცალკე:

pnpm --filter "@myvideo/api" build
pnpm --filter "@myvideo/hooks" build
pnpm --filter "@myvideo/utils" build

# UI დეპენდენციის დაყენება (თუ საჭიროა)

pnpm add @demo-go1337/ui@0.1.0

# აპლიკაციის გაშვება

pnpm dev

# პროდაქშენ ბილდი

pnpm build
