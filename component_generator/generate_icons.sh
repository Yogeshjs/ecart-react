dir="src/assets/images"
for f in "$dir"/*; do
  filename=$(basename "$f" | sed 's/\.[^.]*$//')
  filename_with_ext=$(basename "$f")
  component_name=$(basename "$f" | sed 's/\.[^.]*$//' | sed 's/^\(.\)/\u\1/')Icon
  echo "$f"
cat > src/shared/ui/icons/"$component_name.jsx" <<EOF
import $filename from 'images/$filename_with_ext';

export function $component_name({ alt, ...restProps }) {
    return (
        <img alt={alt} src={$filename} {...restProps} />
    )
}
EOF

echo "React component '$component_name' created in '$component_name.jsx'"
done
