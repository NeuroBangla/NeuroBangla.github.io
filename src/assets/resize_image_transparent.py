from PIL import Image

def increase_image_width(input_image_path, output_image_path, increase_by):
    # Open the original image
    original_image = Image.open(input_image_path)

    # Check if the image has an alpha channel (transparency)
    if original_image.mode != 'RGBA':
        original_image = original_image.convert('RGBA')

    # Get the current width and height of the image
    width, height = original_image.size

    # New width after increase
    new_width = width + increase_by

    # Create a new image with the increased width and transparent background
    new_image = Image.new('RGBA', (new_width, height), (0, 0, 0, 0))

    # Paste the original image onto the new image
    new_image.paste(original_image, (0, 0))

    # Save the modified image
    new_image.save(output_image_path)

    print(f"Image saved to {output_image_path}")

# Example usage
input_image_path = './logo_horizontal.png'
output_image_path = './logo_horizontal2.png'
increase_by = 200  # Increase the width by 200 pixels

increase_image_width(input_image_path, output_image_path, increase_by)
